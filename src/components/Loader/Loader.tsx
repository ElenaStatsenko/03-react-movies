import css from "./Loader.module.css";
interface LoaderProps{
isLoading:boolean;
}
export default function Loader({isLoading}: LoaderProps) {
     if (!isLoading) return null;
    return (
        <p className={css.text}>{isLoading}Loading movies, please wait...</p>
    )
}

  
