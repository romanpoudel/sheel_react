import { Input } from "@/components/ui/input"
interface InputBoxInterface {
  id?: string;
  type?: string;
  placeholder?: string;
} 

export const InputBox: React.FC<InputBoxInterface> = ({ type, placeholder, id }) => {
  return <Input type={type} placeholder={placeholder} id={id}/>
}
