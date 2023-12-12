// import React, { FC } from "react";
// import { useFormContext } from "react-hook-form";

// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Hint } from "@/components/Hint";

// interface RadioGroupItemType {
//   value: string;
//   label: string;
//   hintDescription?: string;
// }

// interface FormRadioGroupProps {
//   name: string;
//   label: string;
//   radioGroups: RadioGroupItemType[];
//   showErrorMsg?: boolean;
//   hintDescription?: string;
//   description?: string;
// }

// const FormRadioGroup: FC<FormRadioGroupProps> = ({
//   label,
//   radioGroups,
//   name,
//   hintDescription,
//   description,
//   showErrorMsg = true,
// }) => {
//   const { control } = useFormContext();

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className="space-y-3">
//           <FormLabel className="flex gap-x-2 ">
//             {label}
//             {hintDescription && <Hint description={hintDescription} />}
//           </FormLabel>
//           {description && <FormDescription>{description}</FormDescription>}

//           <FormControl>
//             <RadioGroup
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//               className="flex flex-col space-y-1"
//             >
//               {radioGroups.map((item, index) => (
//                 <FormItem
//                   key={index}
//                   className="flex items-center space-x-3 space-y-0"
//                 >
//                   <FormControl>
//                     <RadioGroupItem value={item.value} />
//                   </FormControl>
//                   <FormLabel className="font-normal">{item.label}</FormLabel>
//                   {item.hintDescription && (
//                     <Hint description={item.hintDescription} />
//                   )}
//                 </FormItem>
//               ))}
//             </RadioGroup>
//           </FormControl>
//           {showErrorMsg && <FormMessage />}
//         </FormItem>
//       )}
//     />
//   );
// };

// export default FormRadioGroup;
