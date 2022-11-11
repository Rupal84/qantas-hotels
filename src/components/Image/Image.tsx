interface IPropsImage {
    url: string;
    caption: string;
}
export const Image = ({ url, caption }: IPropsImage) => {
    return <img src={url} alt={caption} />;
};
