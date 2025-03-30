export const errorResponse = (
          errorsArray: Array<{field: string, message: string}>
) => {
          let errors = {
                    errorsMessages: [] as Array<{field: string, message: string}>
          }
          errorsArray.forEach((err) => {
                    errors.errorsMessages.push(err)
          })
          return errors
}