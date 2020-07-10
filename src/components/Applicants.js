import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { reorder, move, getItemStyle, getListStyle } from '../functions/Drag'

const Applicants = ({ applicants, setApplicants }) => {
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
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                          }}
                        >
                          {item.content.name}
                          {item.content.location}
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
  )
}

export default Applicants
