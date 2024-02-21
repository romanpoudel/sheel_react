import { Button } from "@/components/ui/button"

export default function ButtonElement({btnText}: {btnText: string}) {
  return (
    <div>
      <Button>{btnText}</Button>
    </div>
  )
}
