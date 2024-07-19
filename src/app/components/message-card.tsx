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
        <div className='mt-5'>
            <div className='w-[40px] h-[40px] bg-[#FFFFFF] rounded-full'></div>
            
            <div className="flex items-center">
                <h1 className='font-medium text-xl'>{message.user}<span className='opacity-50 text-sm'> - {formatDistanceToNow(message.date, { locale: ptBR, addSuffix: true })}</span></h1>
            </div>

            <div className="">
                <p className='break-words text-lg'>{message.content}</p>
            </div>
            <h1>{message.id}</h1>
        </div>
    )
}