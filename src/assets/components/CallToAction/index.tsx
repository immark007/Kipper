import Button from "../../reusable/Button";

export default function CallToAction() {
  return (
    <>
    <div className="w-full p-3 flex flex-col justify-center items-center text-center mt-2">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-semibold text-title">95% das empresas</h1>
            <div className="bg-borderColor w-56 h-2"></div>
        </div>
        <div>
            <p>não sabem como lidar com problemas de <span>escalibilidade</span> e grande volume de requisições.</p>
        </div>
    </div>
    <Button></Button>
    </>
  );
}
