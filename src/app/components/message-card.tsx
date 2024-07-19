import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface MessageCardProps {
    message: {
        id: string,
        content: string
        date: Date,
        user: {
            userName: string,
        },
    }
    onMessageDeletded?: (id: string) => void
}

export function MessageCard({ message, onMessageDeletded }: MessageCardProps) {
    return (
        <div className='flex justify-center gap-2 hover:bg-[#161616] rounded-xl'>
            <div className='w-[40px] h-[40px] bg-[#FFFFFF] rounded-full'></div>
            
            <div className='w-[600px]'>
                <div className="flex items-center">
                    <h1 className='font-medium text-center text-xl'>{message.user.userName}<span className='opacity-50 text-sm'> - às {format(message.date, 'HH:mm')}</span></h1>
                </div>

                <div className="">
                    <p className='break-words text-lg'>{message.content}</p>
                </div>
                {/*      */}
            </div>

        </div>
    )
}