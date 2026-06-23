import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { completeTask } from "@/actions/task"
import { deleteTask } from "@/actions/task"
import { Button } from "@/components/ui/button"
import { CheckIcon, TrashIcon } from "lucide-react"
import { ButtonAddTask } from "./_components/button-add-task"
import { prisma } from "@/lib/prisma"

export default async function DashboardPage() {

  const task = await prisma.task.findMany()

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Minhas Tasks</h1>
        <ButtonAddTask />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {task.map((task) => (
            <TableRow key={task.id}>
              <TableCell className={task.done ? "line-through" : ""}>
                {task.title}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <form
                    action={async () => {
                      "use server"
                      await completeTask(task.id)
                    }}
                  >
                    <Button variant="outline" size="icon">
                      <CheckIcon />
                    </Button>
                  </form>
                  <form
                    action={async () => {
                      "use server"
                      await deleteTask(task.id)
                    }}
                  >
                    <Button variant="destructive" size="icon">
                      <TrashIcon />
                    </Button>
                  </form>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
