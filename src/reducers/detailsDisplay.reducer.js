export default function(projectId = {}, action) {
  if(action.type == 'display') {
      console.log('projectID : ', action.projectId)
      return action.projectId;
  } else {
      return projectId;
  }
}
