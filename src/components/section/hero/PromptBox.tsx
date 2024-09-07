import { Button } from "@/components/ui/button";

export default function PromptBox() {
  return (
    <div className="mx-auto w-full max-w-5xl bg-white p-5 rounded-lg">
      <div className="flex gap-4 items-center">
        <label
          htmlFor="prompt"
          className="italic w-full flex flex-col gap-2 text-sm text-slate-500"
        >
          Prompt
          <textarea
            id="prompt"
            placeholder="Describe the image you want to generate"
            className="resize-none outline-none text-slate-900"
          />
        </label>
        <Button className="bg-[#6B4EFF] rounded-full p-3 sm:p-6">
          <svg
            className="mr-2 hidden sm:block"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M13.625 1.64575C13.9319 1.64575 14.1978 1.86855 14.2652 2.18217L14.7366 4.37445C15.0807 5.97497 16.2738 7.22485 17.8015 7.58539L19.8942 8.07922C20.1936 8.14987 20.4062 8.42843 20.4062 8.74992C20.4062 9.0714 20.1936 9.34997 19.8942 9.42062L17.8015 9.91445C16.2738 10.275 15.0807 11.5249 14.7366 13.1254L14.2652 15.3177C14.1978 15.6313 13.9319 15.8541 13.625 15.8541C13.3181 15.8541 13.0522 15.6313 12.9848 15.3177L12.5134 13.1254C12.1693 11.5249 10.9762 10.275 9.44845 9.91445L7.35578 9.42062C7.05642 9.34997 6.84375 9.0714 6.84375 8.74992C6.84375 8.42843 7.05642 8.14987 7.35578 8.07922L9.44845 7.58539C10.9762 7.22485 12.1693 5.97497 12.5134 4.37445L12.9848 2.18217C13.0522 1.86855 13.3181 1.64575 13.625 1.64575Z"
              fill="white"
            />
            <path
              d="M6.625 10.8125C6.93187 10.8125 7.19777 11.0353 7.26521 11.3489L7.60191 12.9149C7.83183 13.9841 8.62886 14.8191 9.64944 15.0599L11.1442 15.4126C11.4436 15.4833 11.6562 15.7619 11.6562 16.0833C11.6562 16.4048 11.4436 16.6834 11.1442 16.7541L9.64944 17.1068C8.62886 17.3476 7.83183 18.1826 7.60191 19.2518L7.26521 20.8177C7.19777 21.1314 6.93187 21.3542 6.625 21.3542C6.31813 21.3542 6.05223 21.1314 5.98479 20.8177L5.64809 19.2518C5.41817 18.1826 4.62115 17.3476 3.60052 17.1068L2.10578 16.7541C1.80642 16.6834 1.59375 16.4048 1.59375 16.0833C1.59375 15.7619 1.80642 15.4833 2.10578 15.4126L3.60052 15.0599C4.62115 14.8191 5.41817 13.9841 5.64809 12.9149L5.98479 11.3489C6.05223 11.0353 6.31813 10.8125 6.625 10.8125Z"
              fill="white"
            />
          </svg>{" "}
          Generate
        </Button>
      </div>
    </div>
  );
}
