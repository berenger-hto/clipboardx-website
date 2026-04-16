export type FeedbackData = {
    name: string
    email: string
    feedbackType: "suggestion" | "bug" | "question" | "other"
    message: string
}

export type WaitlistData = {
    email: string
    createdAt: string | Date
}

export type APIResponse = {
    message: string
    status: number
}

export type FeatureData = {
    title: string
    description: string
    imageSrc: string
    type: "mobile" | "desktop"
}