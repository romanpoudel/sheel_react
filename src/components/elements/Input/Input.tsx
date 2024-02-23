import { Input } from "@/components/ui/input"

export function InputBox({placeholder}: {placeholder: string}) {
  return <Input type="email" placeholder={placeholder} />
}
