import * as HIcons from "@heroicons/react/24/outline/";

const DynamicHeroIcon = (icon) => {
  const { ...icons } = HIcons;
  console.log({ ...icons });
  let TheIcon = icons[icon];
  console.log(TheIcon);
  return (
    <>
      <div className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  );
};

export default DynamicHeroIcon;
