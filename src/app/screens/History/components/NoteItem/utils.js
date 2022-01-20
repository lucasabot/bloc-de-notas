export const confirmEmptyEdition = fields =>
  Window.confirm(
    fields.length > 1
      ? `Los campos ${{ ...fields }} estan vacios, desea salvar la nota asi?`
      : `El campo ${fields[0]} esta vacio, desea salvar este cambio?`
  );
