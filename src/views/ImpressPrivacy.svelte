<script>
    import BackButton from "../components/BackButton.svelte";

    let responsible = process.env.IMPRESS_RESPONSIBLE || "Max Mustermann"
    let street = process.env.IMPRESS_STREET || "Neuhauser Straße 1b"
    let city = process.env.IMPRESS_CITY || "Oberunterbach"
    let telephone = process.env.IMPRESS_PHONE || "+49 123 4567123"
    let mail = process.env.IMPRESS_MAIL || "muster@mann.de"
</script>

<div class="p-4 pt-12 sm:p-24 sm:pl-40 sm:pt-20 w-full h-screen dark:text-gray-200 overflow-y-scroll scrolling-touch">
    <BackButton/>


    <h1 class="font-semibold text-2xl mt-5">Impressum</h1>

    <h2 class="font-semibold text-xl">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    <p>{responsible}<br/>
        {street}<br/>
        {city}</p>

    <h2 class="font-semibold text-xl">Kontakt</h2>
    <p>Telefon: {telephone}<br/>
        E-Mail: {mail}</p>

    <h3 class="font-semibold text-lg">Haftung f&uuml;r Inhalte</h3> <p>Als Diensteanbieter sind wir
    gem&auml;&szlig; &sect; 7 Abs.1 TMG
    f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8
    bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte
    fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
    T&auml;tigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
    nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch
    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
    entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h3 class="font-semibold text-lg">Haftung f&uuml;r
    Links</h3> <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen
    Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine
    Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
    oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
    m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
    Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
    ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
    werden wir derartige Links umgehend entfernen.</p>
    <h3 class="font-semibold text-lg">Urheberrecht</h3>
    <p>Die durch die Seitenbetreiber
        erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des
        Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads
        und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
    <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

    <h1 class="font-semibold text-2xl">Datenschutzerkl&auml;rung</h1>
    <h2 class="font-semibold text-xl">1. Datenschutz auf einen Blick</h2>
    <h3 class="font-semibold text-lg">Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen
    einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
    Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
    k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
    aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
    <h3 class="font-semibold text-lg">Datenerfassung auf dieser Website</h3> <p><strong>Wer ist
    verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</strong></p> <p>Die Datenverarbeitung auf
    dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser
    Website entnehmen.</p> <p><strong>Wie erfassen wir Ihre Daten?</strong></p> <p>Ihre Daten werden zum einen
    dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in
    ein Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch beim Besuch der Website durch unsere
    IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
    Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
    betreten.</p> <p><strong>Wof&uuml;r nutzen wir Ihre Daten?</strong></p> <p>Ein Teil der Daten wird erhoben,
    um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse
    Ihres Nutzerverhaltens verwendet werden.</p> <p><strong>Welche Rechte haben Sie bez&uuml;glich Ihrer
    Daten?</strong></p> <p>Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber Herkunft,
    Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
    ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
    zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns
    wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p>
    <p>Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
        Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der
        Datenschutzerkl&auml;rung unter &bdquo;Recht auf Einschr&auml;nkung der Verarbeitung&ldquo;.</p>
    <h2 class="font-semibold text-xl">2. Allgemeine Hinweise und Pflichtinformationen</h2>
    <h3 class="font-semibold text-lg">Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz
    Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
    entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn
    Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
    Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
    Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
    erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die
    Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
    aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
    m&ouml;glich.</p>
    <h3 class="font-semibold text-lg">Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle
    f&uuml;r die Datenverarbeitung auf dieser Website ist:</p> <p>{responsible}<br/>
    {street}<br/>
    {city}</p>

    <p>Telefon: {telephone}<br/>
        E-Mail: {mail}</p>
    <p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit
        anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
        E-Mail-Adressen o. &Auml;.) entscheidet.</p>
    <h3 class="font-semibold text-lg">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele
    Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie
    k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung
    per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
    Widerruf unber&uuml;hrt.</p>
    <h3 class="font-semibold text-lg">Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
        sowie gegen Direktwerbung (Art. 21 DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6
    ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER
    BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
    DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE,
    AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH
    EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
    K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE
    INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
    AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
    <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
        JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
        DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER
        DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
        ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2
        DSGVO).</p>
    <h3 class="font-semibold text-lg">Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde</h3>
    <p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
        Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres
        Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
    <h3 class="font-semibold text-lg">Recht auf Daten&uuml;bertragbarkeit</h3> <p>Sie haben das Recht,
    Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
    verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen
    zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen,
    erfolgt dies nur, soweit es technisch machbar ist.</p>
    <h3 class="font-semibold text-lg">SSL- bzw. TLS-Verschl&uuml;sselung</h3> <p>Diese Seite nutzt aus
    Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
    Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
    TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des
    Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
    Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die
    Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
    <h3 class="font-semibold text-lg">Auskunft, L&ouml;schung und Berichtigung</h3> <p>Sie haben im Rahmen
    der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
    gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung
    und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum
    Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an
    uns wenden.</p>
    <h3 class="font-semibold text-lg">Recht auf Einschr&auml;nkung der Verarbeitung</h3> <p>Sie haben das
    Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
    k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
    Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p>
    <ul>
        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
            ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der
            Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
        </li>
        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht,
            k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.
        </li>
        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung,
            Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht,
            statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
        </li>
        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung
            zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen
            Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
        </li>
    </ul>
    <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese
        Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
        Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte
        einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
        wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet
        werden.</p>
    <h2 class="font-semibold text-xl">3. Datenerfassung auf dieser Website</h2>
    <h3 class="font-semibold text-lg">Cookies</h3> <p>Unsere Internetseiten verwenden so
    genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t keinen
    Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder
    dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres
    Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert bis Sie
    diese selbst l&ouml;schen&nbsp;oder eine automatische L&ouml;sung durch Ihren Webbrowser erfolgt.</p>
    <p>Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t gespeichert werden, wenn
        Sie unsere Seite betreten (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die Nutzung
        bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von
        Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
    technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden (z.B. die
    Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu das Nutzerverhalten
    auszuwerten&nbsp;oder Werbung anzuzeigen.</p> <p>Cookies, die zur Durchf&uuml;hrung des elektronischen
    Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z. B.
    Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
    Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien
    und optimierten Bereitstellung seiner Dienste. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B.
    eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
    von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Sie k&ouml;nnen Ihren
    Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im
    Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en
    sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der
    Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p> <p>Soweit
    Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier&uuml;ber im
    Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren und ggf. eine Einwilligung abfragen.</p>
    <h3 class="font-semibold text-lg">Server-Log-Dateien</h3> <p>Der Provider der Seiten erhebt und
    speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an
    uns &uuml;bermittelt. Dies sind:</p>
    <ul class="list-disc ml-6">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
    </ul>
    <p>Alle personenbezogenen Daten werden gelöscht, sobald sie nicht mehr benötigt werden.</p>
    <p>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen sowie eine Weitergabe an Dritte
        wird nicht vorgenommen.</p>
    <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
        Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen
        die Server-Log-Files erfasst werden.</p>
    <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
</div>