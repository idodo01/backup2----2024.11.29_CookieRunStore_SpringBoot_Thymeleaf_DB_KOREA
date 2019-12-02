using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DialogSceneScript : MonoBehaviour {

	public void DialogSceneChange() {
		Debug.Log("버튼눌림");
		SceneManager.LoadScene("Main");
	}
}
