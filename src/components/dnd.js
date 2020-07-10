import React, { useState, useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import { ThemeContext } from '../App'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
})

const ApplicantsDnd = () => {
  // const applicants = useContext(ThemeContext)
  const initialApplicants = [
    { id: '1', content: { name: 'name1', location: 'Houston, TX' } },
    { id: '2', content: { name: 'name2', location: 'New York, NY' } },
    { id: '3', content: { name: 'name3', location: 'Greenville, SC' } },
  ]

  const [applicants, setApplicants] = useState([initialApplicants])

  const [inputName, setInputName] = useState('')
  const [inputLocation, setInputLocation] = useState('')

  const addApplicant = () => {
    let newId = Math.random().toString()
    let newArr = [
      ...applicants[0],
      { id: newId, content: { name: inputName, location: inputLocation } },
    ]
    let groups = applicants.slice(1)
    setApplicants([[...newArr], ...groups])
    setInputName('')
    setInputLocation('')
  }

  const onDragEnd = (result) => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId

    if (sInd === dInd) {
      const items = reorder(applicants[sInd], source.index, destination.index)
      const newState = [...applicants]
      newState[sInd] = items
      setApplicants(newState)
    } else {
      const result = move(
        applicants[sInd],
        applicants[dInd],
        source,
        destination
      )
      const newState = [...applicants]
      newState[sInd] = result[sInd]
      newState[dInd] = result[dInd]

      setApplicants(newState.filter((group) => group.length))
    }
  }

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '16rem' }}
      >
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type='text'
            name='location'
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
          />
        </label>
        <input type='button' value='Add new applicant' onClick={addApplicant} />
      </form>

      <button
        type='button'
        onClick={() => {
          setApplicants([...applicants, []])
        }}
      >
        Add new group
      </button>

      <div style={{ display: 'flex' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {applicants.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <div>{ind === 0 ? 'Applicants' : `Group ${ind}`}</div>
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-around',
                            }}
                          >
                            {item.content.name}
                            {item.content.location}
                            {/* <button
                              type='button'
                              onClick={() => {
                                const newState = [...applicants]
                                newState[ind].splice(index, 1)
                                setApplicants(
                                  newState.filter((group) => group.length)
                                )
                              }}
                            >
                              delete
                            </button> */}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  )
}

export default ApplicantsDnd
