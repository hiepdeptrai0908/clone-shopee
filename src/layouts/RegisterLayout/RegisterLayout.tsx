import Footer from '~/components/Footer'
import Header from '~/components/Header'
// import Sidebar from '../components/Sidebar'
import Sidebar from '~/components/layouts/components/Sidebar'

interface Props {
    children?: React.ReactNode
}

function RegisterLayout({ children }: Props) {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </div>
    )
}

export default RegisterLayout
