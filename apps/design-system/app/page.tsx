import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="flex items-center justify-center gap-2 h-screen">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="momo">Momo</Button>
      <Button variant="ghost">Accent</Button>
      <Button variant="destructive">Danger</Button>
    </div>
  )
}
