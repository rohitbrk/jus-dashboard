interface ContactsResponse {
  src: string;
  name: string;
}

const items: ContactsResponse[] = [
  {
    src: '/public/assets/contact1.png',
    name: 'Natali Craig',
  },
  {
    src: '/public/assets/contact2.png',
    name: 'Drew Cano',
  },
  {
    src: '/public/assets/contact3.png',
    name: 'Orlando Diggs',
  },
  {
    src: '/public/assets/contact4.png',
    name: 'Andi Lane',
  },
  {
    src: '/public/assets/contact5.png',
    name: 'Kate Morrison',
  },
  {
    src: '/public/assets/contact6.png',
    name: 'Koray Okumus',
  },
];

const ContactsCard = () => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <div className="flex items-center gap-2 mt-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <img src={item.src} className="h-6 w-6 flex items-center justify-center rounded-full" />
          </div>
          <p className="line-clamp-1 text-sm text-black">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactsCard;
