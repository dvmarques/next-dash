import NAppContent from '@/components/molecules/NAppContent';
import NAppFooter from '@/components/molecules/NAppFooter';
import NAppHeader from '@/components/molecules/NAppHeader';
import NAppSidebar from '@/components/molecules/NAppSidebar';
import StoreProvider from '@/providers/StoreProvider';
import '@/scss/style.scss';

interface LoggedAreaLayoutProps {
	children: React.ReactNode;
}

export default function LoggedAreaLayout({ children }: LoggedAreaLayoutProps) {
	return (
		<StoreProvider>
			<div>
				<NAppSidebar />
				<div className="wrapper d-flex flex-column min-vh-100">
					<NAppHeader />
					<div className="body flex-grow-1">
						<NAppContent>
							{children}
						</NAppContent>
					</div>
					<NAppFooter />
				</div>
			</div>
		</StoreProvider>
	)
}