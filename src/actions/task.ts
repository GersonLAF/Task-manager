"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addTask(title: string) {
  const { userId } = await auth()

  if (!userId) {
    return redirect("/login")
  }

  await prisma.task.create({
    data: {
      title,
      userId,
    },
  })
  revalidatePath("/dashboard")
}
export async function deleteTask(id: string) {
  const { userId } = await auth()

  if (!userId) {
    return redirect("/login")
  }

  await prisma.task.delete({
    where: {
      id,
    },
  })

  revalidatePath("/dashboard")
}
export async function completeTask(id: string) {
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      done: true,
    },
  })

  revalidatePath("/dashboard")
}