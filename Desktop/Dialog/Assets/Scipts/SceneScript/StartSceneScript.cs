using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class StartSceneScript : MonoBehaviour {

	public void StartSceneChange() {
		Debug.Log("버튼눌림");
		SceneManager.LoadScene("DialogScene");
	}
}
