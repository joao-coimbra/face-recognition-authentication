import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function App() {
	return (
		<div className='App'>
			<div className='bg-white rounded-xl overflow-hidden shadow-lg max-w-[90%]'>
				<div className='p-4 md:p-6 border-b'>
					<h1 className='text-lg text-center md:text-left md:text-4xl font-semibold text-sky-700'>
						Acesse seu painel
					</h1>
				</div>
				<div className='p-4 md:p-6 space-y-4 md:space-y-6 text-center md:text-left'>
					<span className='text-xs md:text-lg text-slate-500'>
						Realize o login ou cadastre-se com nosso sistema de
						reconhecimento facial.
					</span>
					<div className="space-y-3 md:space-y-0 md:space-x-3">
                        <ButtonAccess text="Entrar no painel" onClick={window.authenticateUser} />
                        <ButtonAccess text="Faça seu cadastro" onClick={window.enrollNewUser} />
					</div>
				</div>
			</div>
			<footer>
				Powered by{" "}
				<a
					className='w-20'
					href='https://faceio.net/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						className='max-w-full'
						src='/assets/logos/faceio.png'
						alt='Logo da FaceIO'
					/>
				</a>{" "}
			</footer>
		</div>
	);
}

const ButtonAccess = ({text, onClick}) => {
    return (
        <button className="btn-primary bg-sky-400 hover:bg-sky-300" onClick={() => onClick()}>
            {text}
        </button>
    )
}

export default App;
