import css from "./ErrorMessage.module.css";
interface IsErrorProps {
  isError: boolean
}
export default function ErrorMessage({isError}: IsErrorProps) {
    if (!isError) return null;
  return <p className={css.text}> {isError}There was an error, please try again...</p>;
}
