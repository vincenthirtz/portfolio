const Card = (props: {
  link: string;
  domain: string;
  type: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <div
      class={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer transition-transform hover:scale-105`}
    >
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4 class="mb-0.5">{props.domain}</h4>
        <h5>{props.type}</h5>
        <p class="text-xs mt-0.3">{props.technologies}</p>
      </div>
    </div>
  </a>
);

export default Card;
