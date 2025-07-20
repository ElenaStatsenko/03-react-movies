import css from "./ErrorMessage.module.css";
interface ErrorMessageProps {
  isError: boolean;
}
export default function ErrorMessage({ isError }: ErrorMessageProps) {
  if (!isError) return null;
  return (
    <p className={css.text}>
      {" "}
      {isError}There was an error, please try again...
    </p>
  );
}
