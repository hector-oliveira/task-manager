function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      {children}
    </div>
  );
}

export default Container;
