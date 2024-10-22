import "./App.css";
import Summarize from "./components/Summarize/summarize";
import useSentimentAnalysis from "./components/SentimentAnalysis/useSentimentAnalysis";

function App() {
  const { analysis, analyzeSentiments, anlysisInProgress } =
    useSentimentAnalysis();

  return (
    <>
      <div id="card">
        <h3>What is quantum computing?</h3>
        <p>
          {" "}
          Quantum computing is an emergent field of cutting-edge computer
          science harnessing the unique qualities of quantum mechanics to solve
          problems beyond the ability of even the most powerful classical
          computers. The field of quantum computing contains a range of
          disciplines, including quantum hardware and quantum algorithms. While
          still in development, quantum technology will soon be able to solve
          complex problems that supercomputers can’t solve, or can’t solve fast
          enough. By taking advantage of quantum physics, fully realized quantum
          computers would be able to process massively complicated problems at
          orders of magnitude faster than modern machines. For a quantum
          computer, challenges that might take a classical computer thousands of
          years to complete might be reduced to a matter of minutes. The study
          of subatomic particles, also known as quantum mechanics, reveals
          unique and fundamental natural principles. Quantum computers harness
          these fundamental phenomena to compute probabilistically and quantum
          mechanically.
        </p>
        <h4>Four key principles of quantum mechanics </h4>
        <p>
          Understanding quantum computing requires understanding these four key
          principles of quantum mechanics: Superposition: Superposition is the
          state in which a quantum particle or system can represent not just one
          possibility, but a combination of multiple possibilities.
          Entanglement: Entanglement is the process in which multiple quantum
          particles become correlated more strongly than regular probability
          allows. Decoherence: Decoherence is the process in which quantum
          particles and systems can decay, collapse or change, converting into
          single states measurable by classical physics. Interference:
          Interference is the phenomenon in which entangled quantum states can
          interact and produce more and less likely probabilities.
        </p>
        <h3>Qubits</h3>{" "}
        <p>
          {" "}
          While classical computers rely on binary bits (zeros and ones) to
          store and process data, quantum computers can encode even more data at
          once using quantum bits, or qubits, in superposition. A qubit can
          behave like a bit and store either a zero or a one, but it can also be
          a weighted combination of zero and one at the same time. When
          combined, qubits in superposition can scale exponentially. Two qubits
          can compute with four pieces of information, three can compute with
          eight, and four can compute with sixteen. However, each qubit can only
          output a single bit of information at the end of the computation.
          Quantum algorithms work by storing and manipulating information in a
          way inaccessible to classical computers, which can provide speedups
          for certain problems. As silicon chip and superconductor development
          has scaled over the years, it is distinctly possible that we might
          soon reach a material limit on the computing power of classical
          computers. Quantum computing could provide a path forward for certain
          important problems. With leading institutions such as IBM, Microsoft,
          Google and Amazon joining eager startups such as Rigetti and Ionq in
          investing heavily in this exciting new technology, quantum computing
          is estimated to become a USD 1.3 trillion industry by 2035.1 Secure
          your enterprise for the quantum era Quantum computers are scaling
          rapidly. Soon, they will be powerful enough to solve previously
          unsolvable problems. This opportunity comes with a global challenge:
          quantum computers will be able to break some of the most widely-used
          security protocols in the world. Learn more{" "}
        </p>
        <h3>How do quantum computers work? </h3>
        <p>
          A primary difference between classical and quantum computers is that
          quantum computers use qubits instead of bits to store exponentially
          more information. While quantum computing does use binary code, qubits
          process information differently from classical computers. But what are
          qubits and where do they come from? What are qubits? Generally, qubits
          are created by manipulating and measuring quantum particles (the
          smallest known building blocks of the physical universe), such as
          photons, electrons, trapped ions and atoms. Qubits can also engineer
          systems that behave like a quantum particle, as in superconducting
          circuits. To manipulate such particles, qubits must be kept extremely
          cold to minimize noise and prevent them from providing inaccurate
          results or errors resulting from unintended decoherence. There are
          many different types of qubits used in quantum computing today, with
          some better suited for different types of tasks. A few of the more
          common types of qubits in use are as follows: Superconducting qubits:
          Made from superconducting materials operating at extremely low
          temperatures, these qubits are favored for their speed in performing
          computations and fine-tuned control. Trapped ion qubits: Trapped ion
          particles can also be used as qubits and are noted for long coherence
          times and high-fidelity measurements. Quantum dots: Quantum dots are
          small semiconductors that capture a single electron and use it as a
          qubit, offering promising potential for scalability and compatibility
          with existing semiconductor technology. Photons: Photons are
          individual light particles used to send quantum information across
          long distances through optical fiber cables and are currently being
          used in quantum communication and quantum cryptography. Neutral atoms:
          Commonly occurring neutral atoms charged with lasers are well suited
          for scaling and performing operations. When processing a complex
          problem, such as factoring large numbers, classical bits become bound
          up by holding large quantities of information. Quantum bits behave
          differently. Because qubits can hold a superposition, a quantum
          computer that uses qubits can approach the problem in ways different
          from classical computers. As a helpful analogy for understanding how
          quantum computers use qubits to solve complicated problems, imagine
          you are standing in the center of a complicated maze. To escape the
          maze, a traditional computer would have to “brute force” the problem,
          trying every possible combination of paths to find the exit. This kind
          of computer would use bits to explore new paths and remember which
          ones are dead ends. Comparatively, a quantum computer might derive a
          bird’s-eye view of the maze, testing multiple paths simultaneously and
          using quantum interference to reveal the correct solution. However,
          qubits don't test multiple paths at once; instead, quantum computers
          measure the probability amplitudes of qubits to determine an outcome.
          These amplitudes function like waves, overlapping and interfering with
          each other. When asynchronous waves overlap, it effectively eliminates
          possible solutions to complex problems, and the realized coherent wave
          or waves present the solution. Key principles of quantum computing
          When discussing quantum computers, it is important to understand that
          quantum mechanics is not like traditional physics. The behaviors of
          quantum particles often appear to be bizarre, counterintuitive or even
          impossible. Yet the laws of quantum mechanics dictate the order of the
          natural world. Describing the behaviors of quantum particles presents
          a unique challenge. Most common-sense paradigms for the natural world
          lack the vocabulary to communicate the surprising behaviors of quantum
          particles. To understand quantum computing, it is important to
          understand a few key terms: Superposition Entanglement Decoherence
          Interference. Superposition A qubit itself isn't very useful. But it
          can place the quantum information it holds into a state of
          superposition, which represents a combination of all possible
          configurations of the qubit. Groups of qubits in superposition can
          create complex, multidimensional computational spaces. Complex
          problems can be represented in new ways in these spaces. This
          superposition of qubits gives quantum computers their inherent
          parallelism, allowing them to process many inputs simultaneously.
        </p>
      </div>
      <Summarize elId="card" />
      <button
        disabled={anlysisInProgress}
        className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        onClick={() =>
          analyzeSentiments("This is an horrible product, never buy again")
        }
      >
        Analyze
      </button>
      {`Sentiment is ${analysis?.label}`}
    </>
  );
}

export default App;
