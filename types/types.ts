export type FeedbackData = {
    name: string
    email: string
    feedbackType: "suggestion" | "bug" | "question" | "other"
    message: string
}

export type APIResponse = {
    message: string
    status: number
}