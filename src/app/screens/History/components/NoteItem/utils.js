export const hasDifferences = (originalNote, currentNote) =>
  originalNote.title !== currentNote.title ||
  originalNote.content !== currentNote.content ||
  originalNote.italic !== currentNote.italic ||
  originalNote.bold !== currentNote.bold;
