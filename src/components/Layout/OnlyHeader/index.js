import Header from '~/components/Layout/components/Header';
function OnlyHeader({ children }) {
    return (
        <div>
            <Header />
            <h2>{children}</h2>
        </div>
    );
}

export default OnlyHeader;
