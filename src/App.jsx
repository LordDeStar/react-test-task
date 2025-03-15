import Header from "./components/Header/Header"
import List from "./components/List/List"
import Paragraph from "./components/Paragraph/Paragraph"
const App = () => {
    return (
        <>
            {/* It's a custom header. Big number => big text */}
            <Header level={6}>It's a header</Header>

            {/* It's a custom paragraph. */}
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut pariatur suscipit aperiam tempora rem repellendus adipisci similique provident distinctio? Impedit praesentium nihil minus quibusdam consectetur recusandae. Amet, molestiae perferendis!
            </Paragraph>
            <Paragraph>
                TEst test test
            </Paragraph>

            {/* It's a custom numeric list of elements */}
            <List data={["test", "test 1", "test 2"]} />
        </>
    )
}

export default App