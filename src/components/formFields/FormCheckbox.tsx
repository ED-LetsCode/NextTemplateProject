// import { FC } from "react";
// import { useFormContext } from "react-hook-form";

// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Hint } from "@/components/Hint";

// interface FormCheckboxProps {
//   name: string;
//   label?: string;
//   description?: string;
//   showErrorMessage?: boolean;
//   hintDescription?: string;
// }

// const FormCheckbox: FC<FormCheckboxProps> = ({
//   name,
//   label,
//   description,
//   showErrorMessage = true,
//   hintDescription,
// }) => {
//   const { control } = useFormContext();

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className="flex flex-row items-start space-x-3 space-y-0  ">
//           <FormControl>
//             <Checkbox checked={field.value} onCheckedChange={field.onChange} />
//           </FormControl>
//           <div className="space-y-1 leading-none ">
//             <div className="flex space-x-2">
//               <FormLabel className=" font-semibold">{label}</FormLabel>
//               {hintDescription && <Hint description={hintDescription} />}
//             </div>

//             <FormDescription>{description}</FormDescription>
//             {showErrorMessage && <FormMessage />}
//           </div>
//         </FormItem>
//       )}
//     />
//   );
// };

// export default FormCheckbox;
