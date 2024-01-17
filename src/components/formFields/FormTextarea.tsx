// import { useFormContext } from "react-hook-form";

// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { Hint } from "@/components/Hint";

// interface FormTextareaProps
//   extends React.InputHTMLAttributes<HTMLTextAreaElement> {
//   name: string;
//   label?: string;
//   showErrorMsg?: boolean;
//   hintDescription?: string;
// }

// const FormTextarea = ({
//   name,
//   label,
//   hintDescription,
//   showErrorMsg = true,
//   ...inputProps
// }: FormTextareaProps) => {
//   const { control } = useFormContext();

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem>
//           <div className="flex gap-x-2">
//             {label && <FormLabel>{label}</FormLabel>}
//             {hintDescription && <Hint description={hintDescription} />}
//           </div>

//           <FormControl>
//             <TextArea {...field} {...inputProps} />
//           </FormControl>
//           {showErrorMsg && <FormMessage />}
//         </FormItem>
//       )}
//     />
//   );
// };

// export { FormTextarea };
