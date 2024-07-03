import Image from "next/image";

import spellbook from "../../../public/graphics/spellbook1.png";

const LorePage = () => {
  return (
    <div className="bg-customBg flex min-h-screen flex-col items-center justify-center">
      <Image
        src={spellbook}
        alt={"spell book"}
        width={140}
        height={140}
        className="p-8"
      />

      <p className="text-pretty text-center text-lg">
        Who am I
        <br />
        Hello, my name is Merlon the Wizard.
        <br />
        I'm the worst wizard in the world.
        <br />
        It's not easy being a wizard, but all I can do is try.
        <br />
        I cast spells sometimes, but they don't always work well.
        <br />
        Like one time, I accidentally turned my friend into a mouse, and then he
        ran into the sink and drowned.
        <br />
        Another time, I tried to make it rain candy, but instead it rained
        broccoli.
        <br />
        And once, I wanted to summon a dragon, but I ended up with a lizard-bat
        with wings. It ate all my books. So I lost my spells.
        <br />
        My best friend is a pet fly named Aminal. I think he likes me too, but
        I'm not sure.
        <br />
        I just want to be a good wizard and make people happy with my magic.
        <br />
        Can I help you perhaps?
      </p>
    </div>
  );
};

export default LorePage;
