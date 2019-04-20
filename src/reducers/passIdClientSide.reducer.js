export default function(projectId = {}, action) {
  if(action.type === 'enter') {
      console.log('projectID : ', action.projectId)
      return action.projectId;
  } else {
      return projectId;
  }
}
