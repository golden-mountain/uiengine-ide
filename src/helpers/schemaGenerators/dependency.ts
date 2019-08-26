import _ from "lodash";

export const dependency = (
  name: string,
  componentSchema: IComponentSchema,
  value: any,
  options: any = {}
) => {
  // TODO: validate by componentSchema
  return {
    state: {
      [name]: {
        //visible/valid
        deps: [value]
      }
    }
  };
};
