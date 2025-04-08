export const validateSchema = (schema) => {
  return (req, res, next) => {
    const errors = [];

    // Validar req.body si existe en el schema
    if (schema.body) {
      const result = schema.body.safeParse(req.body);

      if (!result.success) {
        errors.push(
          ...result.error.errors.map((err) => ({
            field: `body.${err.path.join(".")}`,
            message: err.message,
          }))
        );
      } else {
        req.body = result.data;
      }
    }

    //Validar req.params si existe en el schema
    if (schema.params) {
      const result = schema.params.safeParse(req.params);

      if (!result.success) {
        errors.push(
          ...result.error.errors.map((err) => ({
            field: `params.${err.path.join(".")}`,
            message: err.message,
          }))
        );
      } else {
        req.params = result.data;
      }
    }

    //Validar req.query si existe en el schema
    if (schema.query) {
      const result = schema.query.safeParse(req.query);

      if (!result.success) {
        errors.push(
          ...result.error.errors.map((err) => ({
            field: `query.${err.path.join(".")}`,
            message: err.message,
          }))
        );
      } else {
        req.query = result.data;
      }
    }

    // Si hay errores, devolvemos una respuesta con el código 400
    if (errors.length > 0) return res.status(400).json({ errors });

    // Si no hay errores
    next();
  };
};
