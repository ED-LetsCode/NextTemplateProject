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

// interface Checkbox {
//   id: string;
//   label: string;
//   hintDescription?: string;
//   defaultChecked?: boolean;
// }

// interface FormMultipleCheckboxProps {
//   name: string;
//   label?: string;
//   description?: string;
//   items: Checkbox[];
//   showErrorMessage?: boolean;
//   hintDescription?: string;
// }

// const FormMultipleCheckbox: FC<FormMultipleCheckboxProps> = ({
//   name,
//   items,
//   showErrorMessage = true,
//   label,
//   description,
//   hintDescription,
// }) => {
//   const { control } = useFormContext();

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={() => (
//         <FormItem>
//           <div className="mb-4">
//             {label && (
//               <FormLabel className="flex items-center gap-x-2 text-base">
//                 {label}
//                 {hintDescription && <Hint description={hintDescription} />}
//               </FormLabel>
//             )}
//             {description && <FormDescription>{description}</FormDescription>}
//           </div>

//           {items.map((item, index) => (
//             <FormField
//               key={index}
//               control={control}
//               name={name}
//               render={({ field }) => {
//                 return (
//                   <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                     <FormControl>
//                       <Checkbox
//                         defaultChecked={item.defaultChecked}
//                         checked={
//                           Array.isArray(field.value) &&
//                           field.value.includes(item.id)
//                         }
//                         onCheckedChange={(checked) => {
//                           const currentValues = Array.isArray(field.value)
//                             ? field.value
//                             : [];
//                           const updatedValues = checked
//                             ? [...currentValues, item.id]
//                             : currentValues.filter(
//                                 (value) => value !== item.id,
//                               );

//                           const finalValues =
//                             updatedValues.length > 0
//                               ? updatedValues
//                               : undefined;

//                           field.onChange(finalValues);
//                         }}
//                       />
//                     </FormControl>
//                     <FormLabel>{item.label}</FormLabel>
//                     {item.hintDescription && (
//                       <Hint description={item.hintDescription} />
//                     )}
//                   </FormItem>
//                 );
//               }}
//             />
//           ))}
//           {showErrorMessage && <FormMessage />}
//         </FormItem>
//       )}
//     />
//   );
// };

// export default FormMultipleCheckbox;
