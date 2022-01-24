import api from 'config/api';

export default {
  getNotes: () => api.get('/notes'),
  createNote: note => api.post('/notes', note),
  deleteNote: id => api.delete(`/notes/${id}`),
  modifyNote: note => api.put(`/notes/${note.id}`, note)
};
