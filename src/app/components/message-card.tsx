import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface MessageCardProps {
    message: {
        id: string,
        date: Date,
        user: string,
        content: string
    }
    onMessageDeletded?: (id: string) => void
}

export function MessageCard({ message, onMessageDeletded }: MessageCardProps) {
    return (
        <div>
            <h1>{message.id}</h1>
            <h1>{formatDistanceToNow(message.date, { locale: ptBR, addSuffix: true })}</h1>
            <h1>{message.user}</h1>
            <h1>{message.content}</h1>
        </div>
    )
}