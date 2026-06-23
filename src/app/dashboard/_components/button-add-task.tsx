"use client"

import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogFooter,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, set, useForm } from "react-hook-form"
import * as z from "zod"
import { addTask } from "@/actions/task"
import { useState } from "react"

const formSchema = z.object({
  title: z.string().min(5, "Sua task precisa de pelo menos 5 caracteres!"),
})

export function ButtonAddTask() {
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    addTask(data.title) 
    setOpen(false)
    form.reset()
  }

  return (
    <>
    <Button onClick={() => setOpen(true)}>Adicionar task</Button>
    <Dialog 
    open={open}
    onOpenChange={(open) => {
    setOpen(!open)
    }}>

      <DialogContent>
        <DialogTitle></DialogTitle>

        <Card className="w-full sm:max-w-md">
          <CardHeader>
            <CardTitle>Adicionar Task</CardTitle>
            <CardDescription>Adicione sua task.</CardDescription>
          </CardHeader>

          <CardContent>
            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Sua task
                      </FieldLabel>

                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Informe a sua task..."
                        autoComplete="off"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>

          <DialogFooter>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>

              <Button type="submit" form="form-rhf-demo">
                Submit
              </Button>
            </Field>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
    </>
  )
}