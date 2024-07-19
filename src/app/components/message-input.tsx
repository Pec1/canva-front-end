import Textarea from '@mui/joy/Textarea';
import Button from "./ui/Button";
import { SendHorizontal } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from 'react';

interface NewMessgeCardProps {
    onMessageCreated: (content: string) => void
}

export function MessageInput({ onMessageCreated }: NewMessgeCardProps) {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
    const [content, setContent] = useState('')
    
    function hadleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
        
        if(event.target.value === '') {
            setShouldShowOnboarding(true)
        }
    }

    function handleSaveMessage(event: FormEvent) {
        event.preventDefault()

        if (content === '') {
            return
        }

        const fullContent = `${content}`

        onMessageCreated(fullContent)

        setContent('')
        setShouldShowOnboarding(true)
    }

    return (
        <form className="flex justify-between gap-2 w-full mt-5">
            <Textarea
              value={content}
              onChange={hadleContentChanged}
              maxRows={4}
              variant="soft"
              className="w-[600px] pl-8 pr-8 border-[1px] rounded-xl"
              placeholder="Digite sua mensagem"
              sx={  
                {
                  'background':'#1c1c1c',
                  'color':'#FFFFFF',
                  '--Textarea-focusedInset': 'none',
                }
              }
            />
            <Button icon={SendHorizontal} onClick={handleSaveMessage} />
        </form>
    )
}