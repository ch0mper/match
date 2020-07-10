export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
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

export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 2,
  borderRadius: 4,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'darkgrey' : 'lightgrey',

  // styles we need to apply on draggables
  ...draggableStyle,
})

export const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightpink' : 'lightgrey',
  padding: grid,
  width: 250,
  margin: 8,
})
