import React from 'react'
import ApplicantDetails from './ApplicantDetails'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { reorder, move, getItemStyle, getListStyle } from '../functions/Drag'
import Card from '@material-ui/core/Card'

const Applicants = ({ applicants, setApplicants }) => {
  const onDragEnd = (result) => {
    const { draggableId, source, destination } = result

    const sInd = +source.droppableId

    // dropped outside the list
    if (!destination) {
      const newState = [...applicants]
      newState[sInd] = newState[sInd].filter((e) => e.id !== draggableId)
      setApplicants(newState)
      return
    }

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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {applicants.map((el, ind) => (
          <Droppable key={ind} droppableId={`${ind}`}>
            {(provided, snapshot) => (
              <Card
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                <div
                  style={{
                    marginBottom: 8,
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                  }}
                >
                  {ind === 0 ? 'Applicants' : `Group ${ind}`}
                </div>
                {el.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
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
                        <ApplicantDetails applicant={item.content} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Card>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  )
}

export default Applicants
