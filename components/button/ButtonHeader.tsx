import { Button } from "../ui/button"

interface ButtonHeaderProps {
    icon: JSX.Element;
    onPress?: () => void;
}
const ButtonHeader = (props: ButtonHeaderProps) => {
    const {
        icon,
        onPress
    } = props

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            className="bg-white rounded-full"
            onPress={onPress}>
            {icon}
        </Button>
    )
}

export default ButtonHeader;