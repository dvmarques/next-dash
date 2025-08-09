import NAppContent from '@/components/NAppContent';
import NAppFooter from '@/components/NAppFooter';
import NAppHeader from '@/components/NAppHeader';
import NAppSidebar from '@/components/NAppSidebar';
import StoreProvider from '@/providers/StoreProvider';
import '@/scss/style.scss';

export default function HomeXpto() {
	return (
		<StoreProvider>
			<div>
				<NAppSidebar />
				<div className="wrapper d-flex flex-column min-vh-100">
					<NAppHeader />
					<div className="body flex-grow-1">
						<NAppContent />
					</div>
					<NAppFooter />
				</div>
			</div>
		</StoreProvider>
	)
}