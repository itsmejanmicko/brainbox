import {useLogin} from "../../reducers/useLogin.tsx";

export default function LoginPage() {
  const { email, password, setEmail, setPassword, handleLogin } = useLogin();

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black font-mono">
        <div className="max-w-md w-full px-8 py-6 bg-white/60 rounded-lg shadow-md drop-shadow-2xl border-none">
          <h2 className="text-center text-3xl font-bold mb-6">Sign in to your account</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium mb-2">Email address</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-black px-3 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-black focus:border-black bg-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-md font-medium mb-2">Password</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-black px-3 py-2 border border-zinc-700 rounded-lg focus:outline-none focus:ring-black focus:border-black bg-transparent"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-white bg-black border-zinc-700" />
                <span className="ml-2">Remember me</span>
              </label>
            </div>
            <button type="submit" className="w-full bg-primary/40 text-black hover:bg-zinc-300 py-2 rounded-lg transition-colors">Sign in</button>
          </form>
          <div className="text-center mt-6">
            <p>Don't have an account? <a href="/signup" className="hover:underline">Sign up</a></p>
          </div>
        </div>
      </div>
  );
}
