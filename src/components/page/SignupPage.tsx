import {useSignup} from '../../reducers/useSignup'

export default function SignupPage() {
  const {email, password, setEmail, setPassword, setConfirmPassword, confirmPassword,  handleSignup} = useSignup();

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black font-mono">
        <div className="max-w-md w-full px-8 py-6 bg-white/40 rounded-lg shadow-md border-none drop-shadow-2xl">
          <h2 className="text-center text-3xl font-bold mb-6">Create account</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium  mb-1">Email address</label>
              <input type="email" id="email" name="email" required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full text-black px-3 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-black focus:border-black bg-transparent"/>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-md font-medium  mb-1">Password</label>
              <input type="password" id="password" name="password" required
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     className="w-full text-black px-3 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-black focus:border-black bg-transparent"/>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-md font-medium  mb-1">Confirm Password</label>
              <input type="password" id="password" name="password" required
                     value={confirmPassword}
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                     className="w-full text-black px-3 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-black focus:border-black bg-transparent"/>
            </div>
            <button type="submit"
                    className="w-full bg-primary/40 text-black hover:bg-zinc-300 py-2 rounded-lg transition-colors">Create account
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="">Already have an account? <a href="login" className=" hover:underline">Login</a></p>
          </div>
        </div>
      </div>


  )
}