import { Alert, AlertIcon, AlertStatus } from '../../libraries/chakra';

interface MessageProps {
    text: string;
    status: AlertStatus;
}

export const Message = ({ text, status }: MessageProps) => (
    <Alert status={status}>
        <AlertIcon />
        {text}
    </Alert>
);