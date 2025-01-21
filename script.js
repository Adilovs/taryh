const data = {
    world: [
        {
            name: "Архимед",
            image: "https://avatars.mds.yandex.net/i?id=a845f5f6ffeb66cefd3c2505796e59f7b50a7572-7762130-images-thumbs&n=13",
            description: "Эң улуу математиктердин жана инжинирлердин бири болгон байыркы грек илимпозу",
            era: "287-212 жылдар б.з.ч.",
            dates: {
                birth: "287 жыл б.з.ч.",
                death: "212 жыл до б.з.ч."
            },
            bio: "Архимед Сиракуза шаарынан чыккан байыркы грек математиги, физиги, инженер, ойлоп табуучу жана астроном. Анын изилдөөлөрү математика, механика жана гидростатика сыяктуу тармактарды камтыйт. Архимед байыркы доордун эң улуу илимпоздорунун бири болуп саналат жана анын ачылыштары дүйнөлүк илимге чоң салым кошкон.",
            achievements: "• Архимеддин дене сууга батканда айланасын орнотулган мыйзамы\n• Архимед спиралын иштеп чыгуу\n• Тегеректин аянты жана көлөмү боюнча математикалык иштери\n• Түрдүү аскердик техникаларды, анын ичинде катапультаны жана коргоо механизмдерин ойлоп табуу\n• Рычагдар принцибин аныктоо"
        },
        {
            name: "Александр Македонский",
            image: "https://avatars.mds.yandex.net/i?id=d79b95db3f6bb338e06f01e63286162ec41f4fcb-5219719-images-thumbs&n=13",
            description: "Македония падышасы, дүйнө жүзү боюнча эң атактуу аскер башчы жана император, Улуу Жибек жолунун кеңейишине жана дүйнө жүзүндө эл аралык тарыхка чоң таасир калтырган.",
            era: "М.з.ч. IV кылым",
            dates: {
                birth: "356-жыл, Пелла, Македония",
                death: "323-жыл, Бабил, Персия"
            },
            bio: "Александр Македонский — дүйнөдөгү эң улуу аскер башчыларынын бири болуп саналат. Ал 20 жашында Македониянын падышасы болуп, өзүнүн аскердик генинин жардамы менен дүйнөнүн көпчүлүк бөлүгүн басып алган. Александрдын негизги максаты — грек маданиятын жана элдерди бириктирүү болгон. Ал Индияга чейин жетип, дүйнөдөгү эң ири империяларды түзүп, көптөгөн жерлерди жана элдерди башкарууга алган. Александрдын көз карашында, мурас катары чоң маданий жана аскердик ийгиликтер калган, бирок 33 жашында көз жумган.",
            achievements: "• Македонияны аскердик империяга айландыруу\n• Мыкты аскер башчы жана стратегиялык башкаруу\n• Азия, Египет, Индиянын бир нече аймактарын басып алуу\n• Грек маданиятынын жана философиясынын дүйнө жүзүндө жайылуусуна өбөлгө түзүү\n• Булгунга каршы согушта жеңишке жетишүү жана ири империя куруу"
        }
    ],
    kyrgyz: [
        {
            name: "Модэ Шанүй",
            image: "https://upload.wikimedia.org/wikipedia/ky/thumb/a/ac/Mode_shanui.JPG/170px-Mode_shanui.JPG",
            description: "Хунну урууларынын башчысы, байыркы Кытай жана Орто Азиядагы маанилүү саясий ишмер",
            era: "б. з. ч. 209-174-ж.",
            dates: {
                birth: "б. з. ч. 209-ж.",
                death: "б. з. ч. 174-ж."
            },
            bio: "Модэ Шанүй – хунну уруусунун шанүйү (жогорку башкаруучу), Кытайдын жана Орто Азиянын тарыхында чоң таасир калтырган аскерий жана саясий жетекчи. Ал Toyман аттуу атасынын көзөмөлүнөн чыгып, хунндарды бириктирип, алардын күчүн жогорулаткан. Модэ Шанүй ошондой эле Кытайга каршы ийгиликтүү жортуулдарды уюштуруп, бейкуттук келишимдерин түзүп, хунну мамлекетинин күчү менен таасир көрсөтүп турган.",
            achievements: "• Хунну урууларынын биримдигин күчөтүү\n• Кытайга каршы ийгиликтүү жортуулдарды жүргүзүү\n• Кытай императору Лю Банды туулгандык жана бейкуттук келишими менен багындыруу\n• Юэчжилерди, усундарды жана башка элдерди баш ийдирүү\n• Хунну мамлекетинин аскерий күчүн күчөтүү"
        }
    ]
};

function createCard(person) {
    return `
        <article class="card">
            <div class="image-wrap">
                <img class="image" src="${person.image}" alt="${person.name}">
                <div class="era">${person.era}</div>
            </div>
            <div class="info">
                <h2 class="name">${person.name}</h2>
                <p class="description">${person.description}</p>
                <button class="button" onclick="toggleDetails(this)">Толук маалымат</button>
                <div class="details">
                    <div class="dates">
                        <span><strong>Туулган күнү:</strong> ${person.dates.birth}</span>
                        <span><strong>Каза болгон күнү:</strong> ${person.dates.death}</span>
                    </div>
                    <div class="biography">
                        <div class="section-title">Өмүр баяны</div>
                        <div class="section-content">${person.bio}</div>
                    </div>
                    <div class="achievements">
                        <div class="section-title">Жетишкендиктери</div>
                        <div class="section-content">${person.achievements}</div>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function showCategory(category) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });

    const container = document.getElementById(category);
    container.style.display = 'grid';

    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.toggle('active', button.dataset.category === category);
    });

    container.innerHTML = data[category].map(createCard).join('');
}

function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isVisible = details.classList.contains('visible');

    details.classList.toggle('visible');
    button.textContent = isVisible ? 'Толук маалымат' : 'Жашыруу';
}

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => showCategory(button.dataset.category));
});

showCategory('world');
